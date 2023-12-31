import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GlobalState } from '../interface'
import { DEFAULT_PRIMARY } from '@/config'

const globalState: GlobalState = {
  // 布局模式 (纵向：vertical | 经典：classic | 横向：transverse | 分栏：columns)
  layout: 'classic',
  // antd 组件大小 ("small" | "middle" | "large")
  componentSize: 'middle',
  // antd 紧凑 主题
  compactAlgorithm: false,
  // antd border radius
  borderRadius: 6,
  // 当前系统语言
  language: null,
  // 当前页面是否全屏显示
  maximize: false,
  // 主题颜色
  primary: DEFAULT_PRIMARY,
  // 暗黑模式
  isDark: true,
  // 灰色模式
  isGrey: false,
  // 色弱模式
  isWeak: false,
  // 快乐工作主题
  isHappy: true,
  // 拆分菜单
  menuSplit: true,
  // 侧边栏反转颜色
  siderInverted: false,
  // 头部反转颜色
  headerInverted: false,
  // 折叠菜单
  isCollapse: false,
  // 菜单手风琴
  accordion: true,
  // 水印
  watermark: true,
  // 面包屑导航
  breadcrumb: true,
  // 面包屑导航图标
  breadcrumbIcon: true,
  // 标签页
  tabs: true,
  // 标签页图标
  tabsIcon: true,
  // tabs drag
  tabsDrag: true,
  // 页脚
  footer: true,
  // 主题配置
  themeDrawerVisible: false,
}

const globalSlice = createSlice({
  name: 'global-store',
  initialState: globalState,
  reducers: {
    setGlobalState<T extends keyof GlobalState>(state: GlobalState, { payload }: PayloadAction<objToKeyValUnion<GlobalState>>) {
      state[payload.key as T] = payload.value as GlobalState[T]
    },
  },
})

export const { setGlobalState } = globalSlice.actions

export default globalSlice.reducer
