import { useEffect } from 'react'
import { RootState, useSelector } from '@/redux'
import { theme } from 'antd'
import globalTheme from '@/styles/theme/global'
import { setStyleProperty } from '@/utils'
import { getLightColor, getDarkColor } from '@/utils/color'

type ThemeType = 'light' | 'inverted' | 'dark'

const useTheme = () => {
  // token 里面是预设css变量
  const { token } = theme.useToken()

  const { isDark, borderRadius, primary, compactAlgorithm } = useSelector((state: RootState) => state.global)

  // 切换暗黑模式
  useEffect(() => switchDark(), [isDark])
  const switchDark = () => {
    const html = document.documentElement
    html.setAttribute('class', isDark ? 'dark' : '')
    changePrimary()
  }

  /**
   * @description 切换主题颜色
   */
  useEffect(() => changePrimary(), [primary, borderRadius, compactAlgorithm])
  const changePrimary = () => {
    const type: ThemeType = isDark ? 'dark' : 'light'
    // 自定义的 less 变量
    Object.entries(globalTheme[type]).forEach(([key, val]) => setStyleProperty(key, val))
    // antd less 变量
    Object.entries(token).forEach(([key, val]) => setStyleProperty(`--hooks-${key}`, val))
    // antd primaryColor less variable
    for (let i = 1; i <= 9; i++) {
      setStyleProperty(
        `--hooks-colorPrimary${i}`,
        isDark ? `${getDarkColor(primary, i / 10)}` : `${getLightColor(primary, i / 10)}`
      )
    }
  }
}

export default useTheme
