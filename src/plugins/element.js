import Vue from 'vue'
import { Row, Col, Button, Menu, Submenu, MenuItemGroup, MenuItem, Scrollbar, Input, InputNumber, Switch, Form, FormItem, Table, TableColumn } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/element-variables.scss'
Vue.use(Row).use(Col)
  .use(Button).use(Menu).use(Submenu)
  . use(MenuItemGroup).use(MenuItem).use(Scrollbar)
  .use(Input).use(Switch).use(InputNumber)
  .use(Form).use(FormItem)
  .use(Table).use(TableColumn)
