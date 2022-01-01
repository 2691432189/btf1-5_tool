import { ElPopconfirm, ElCheckbox, ElImage, ElTable, ElTableColumn, ElLoading, ElTabs, ElTabPane, ElDialog, ElTooltip, ElCol, ElRow, ElCard, ElScrollbar, ElButton, ElInput, ElCascader, ElTag } from 'element-plus'

export default (app:any):void => {
  app.use(ElTableColumn)
  app.use(ElImage)
  app.use(ElButton)
  app.use(ElTable)
  app.use(ElLoading)
  app.use(ElCheckbox)
  app.use(ElTabs)
  app.use(ElTabPane)
  app.use(ElPopconfirm)
  app.use(ElDialog)
  app.use(ElTooltip)
  app.use(ElRow)
  app.use(ElScrollbar)
  app.use(ElCard)
  app.use(ElCol)
  app.use(ElInput)
  app.use(ElCascader)
  app.use(ElTag)
}
