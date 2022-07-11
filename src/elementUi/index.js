import Vue from 'vue'

// 按需引入elementUi组件
import {Main,Aside,Header,Container,Menu,Submenu
    ,MenuItemGroup,MenuItem,Dropdown,DropdownMenu
    ,DropdownItem,Row,Card,Col,Table, TableColumn,
    Breadcrumb, BreadcrumbItem, Tag, Form, FormItem,
    Input, Select, Option, Switch, DatePicker,Dialog,
    Button,
  } from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css';
  
  
  
  Vue.component(Main.name,Main)
  Vue.component('dz-side',Aside)
  Vue.component(Header.name,Header)
  Vue.component(Container.name,Container)
  Vue.component(Menu.name,Menu)
  Vue.component(Submenu.name,Submenu)
  Vue.component(MenuItemGroup.name,MenuItemGroup)
  Vue.component(MenuItem.name,MenuItem)
  Vue.component(Dropdown.name,Dropdown)
  Vue.component(DropdownMenu.name,DropdownMenu)
  Vue.component(DropdownItem.name,DropdownItem)
  Vue.component(Row.name,Row)
  Vue.component(Card.name,Card)
  Vue.component(Col.name,Col)
  Vue.component(Table.name,Table)
  Vue.component(TableColumn.name,TableColumn)
  Vue.component(Breadcrumb.name,Breadcrumb)
  Vue.component(BreadcrumbItem.name,BreadcrumbItem)
  Vue.component(Tag.name,Tag)
  Vue.component(Form.name,Form)
  Vue.component(FormItem.name,FormItem)
  Vue.component(Input.name,Input)
  Vue.component(Select.name,Select)
  Vue.component(Option.name,Option)
  Vue.component(DatePicker.name,DatePicker)
  Vue.component(Switch.name,Switch)
  Vue.component(Dialog.name,Dialog)
  Vue.component(Button.name,Button)
  