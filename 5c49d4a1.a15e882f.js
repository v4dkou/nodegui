(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{246:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return m}));var n=a(2),b=a(6),r=(a(0),a(471)),c={id:"qtreewidgetitem",title:"QTreeWidgetItem",sidebar_label:"QTreeWidgetItem"},l={id:"api/generated/classes/qtreewidgetitem",title:"QTreeWidgetItem",description:"Creates an item for QTreeWidget.",source:"@site/docs/api/generated/classes/qtreewidgetitem.md",permalink:"/docs/api/generated/classes/qtreewidgetitem",editUrl:"https://github.com/nodegui/nodegui/edit/master/website/docs/api/generated/classes/qtreewidgetitem.md",sidebar_label:"QTreeWidgetItem",sidebar:"api",previous:{title:"QTreeWidget",permalink:"/docs/api/generated/classes/qtreewidget"},next:{title:"QUrl",permalink:"/docs/api/generated/classes/qurl"}},p=[{value:"Example",id:"example",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"items",id:"items",children:[]},{value:"native",id:"native",children:[]},{value:"nodeChildren",id:"nodechildren",children:[]},{value:"<code>Optional</code> nodeParent",id:"optional-nodeparent",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"addChild",id:"addchild",children:[]},{value:"child",id:"child",children:[]},{value:"childCount",id:"childcount",children:[]},{value:"data",id:"data",children:[]},{value:"flags",id:"flags",children:[]},{value:"isHidden",id:"ishidden",children:[]},{value:"parent",id:"parent",children:[]},{value:"setCheckState",id:"setcheckstate",children:[]},{value:"setData",id:"setdata",children:[]},{value:"setExpanded",id:"setexpanded",children:[]},{value:"setFlags",id:"setflags",children:[]},{value:"setHidden",id:"sethidden",children:[]},{value:"setNodeParent",id:"setnodeparent",children:[]},{value:"setSelected",id:"setselected",children:[]},{value:"setText",id:"settext",children:[]},{value:"text",id:"text",children:[]}]}],i={rightToc:p};function m(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Creates an item for QTreeWidget.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"This class is a JS wrapper around Qt's ",Object(r.b)("a",Object(n.a)({parentName:"strong"},{href:"https://doc.qt.io/qt-5/qtreewidgetitem.html"}),"QTreeWidgetItem class"))),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'\nconst { QMainWindow, QTreeWidgetItem, QTreeWidget } = require("@nodegui/nodegui");\n\nconst win = new QMainWindow();\nconst tree = new QTreeWidget();\n\nconst item1 = new QTreeWidgetItem();\nitem1.setText(0, `item-1`);\nconst item2 = new QTreeWidgetItem();\nitem2.setText(0, `item-2`);\nconst item3 = new QTreeWidgetItem();\nitem3.setText(0, `item-3`);\n\ntree.addTopLevelItem(item1);\ntree.addTopLevelItem(item2);\ntree.addTopLevelItem(item3);\n\n// Add children to item1\nconst c1item1 = new QTreeWidgetItem(item1);\nc1item1.setText(0, `c1item1`);\nconst c1item2 = new QTreeWidgetItem(item1);\nc1item2.setText(0, `c1item1`);\n\nwin.setCentralWidget(tree);\nwin.show();\n(global as any).win = win;\n\n')),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/component"}),"Component")),Object(r.b)("p",{parentName:"li"},"\u21b3 ",Object(r.b)("strong",{parentName:"p"},"QTreeWidgetItem")))),Object(r.b)("h2",{id:"index"},"Index"),Object(r.b)("h3",{id:"constructors"},"Constructors"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qtreewidgetitem#constructor"}),"constructor"))),Object(r.b)("h3",{id:"properties"},"Properties"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qtreewidgetitem#items"}),"items")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qtreewidgetitem#native"}),"native")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qtreewidgetitem#nodechildren"}),"nodeChildren")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qtreewidgetitem#optional-nodeparent"}),"nodeParent"))),Object(r.b)("h3",{id:"methods"},"Methods"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qtreewidgetitem#addchild"}),"addChild")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qtreewidgetitem#child"}),"child")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qtreewidgetitem#childcount"}),"childCount")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qtreewidgetitem#data"}),"data")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qtreewidgetitem#flags"}),"flags")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qtreewidgetitem#ishidden"}),"isHidden")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qtreewidgetitem#parent"}),"parent")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qtreewidgetitem#setcheckstate"}),"setCheckState")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qtreewidgetitem#setdata"}),"setData")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qtreewidgetitem#setexpanded"}),"setExpanded")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qtreewidgetitem#setflags"}),"setFlags")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qtreewidgetitem#sethidden"}),"setHidden")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qtreewidgetitem#setnodeparent"}),"setNodeParent")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qtreewidgetitem#setselected"}),"setSelected")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qtreewidgetitem#settext"}),"setText")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qtreewidgetitem#text"}),"text"))),Object(r.b)("h2",{id:"constructors-1"},"Constructors"),Object(r.b)("h3",{id:"constructor"},"constructor"),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new QTreeWidgetItem"),"(): ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qtreewidgetitem"}),"QTreeWidgetItem"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Overrides ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#constructor"}),"constructor"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qtreewidgetitem"}),"QTreeWidgetItem"))),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new QTreeWidgetItem"),"(",Object(r.b)("inlineCode",{parentName:"p"},"parent"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qtreewidgetitem"}),"QTreeWidgetItem"),", ",Object(r.b)("inlineCode",{parentName:"p"},"strings?"),": string[]): ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qtreewidgetitem"}),"QTreeWidgetItem"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Overrides ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#constructor"}),"constructor"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"parent")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/classes/qtreewidgetitem"}),"QTreeWidgetItem"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"strings?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qtreewidgetitem"}),"QTreeWidgetItem"))),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new QTreeWidgetItem"),"(",Object(r.b)("inlineCode",{parentName:"p"},"parent"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qtreewidget"}),"QTreeWidget"),", ",Object(r.b)("inlineCode",{parentName:"p"},"strings?"),": string[]): ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qtreewidgetitem"}),"QTreeWidgetItem"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Overrides ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#constructor"}),"constructor"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"parent")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/classes/qtreewidget"}),"QTreeWidget"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"strings?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qtreewidgetitem"}),"QTreeWidgetItem"))),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new QTreeWidgetItem"),"(",Object(r.b)("inlineCode",{parentName:"p"},"native"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/globals#nativeelement"}),"NativeElement"),"): ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qtreewidgetitem"}),"QTreeWidgetItem"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Overrides ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#constructor"}),"constructor"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"native")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/globals#nativeelement"}),"NativeElement"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qtreewidgetitem"}),"QTreeWidgetItem"))),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new QTreeWidgetItem"),"(",Object(r.b)("inlineCode",{parentName:"p"},"strings"),": string[]): ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qtreewidgetitem"}),"QTreeWidgetItem"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Overrides ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#constructor"}),"constructor"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"strings")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qtreewidgetitem"}),"QTreeWidgetItem"))),Object(r.b)("h2",{id:"properties-1"},"Properties"),Object(r.b)("h3",{id:"items"},"items"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"items"),": ",Object(r.b)("em",{parentName:"p"},"Set\u2039",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/globals#nativeelement"}),"NativeElement")," | ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),"\u203a")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"native"},"native"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"native"),": ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/globals#nativeelement"}),"NativeElement"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Overrides ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#abstract-native"}),"native"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"nodechildren"},"nodeChildren"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"nodeChildren"),": ",Object(r.b)("em",{parentName:"p"},"Set\u2039",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),"\u203a")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Inherited from ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#nodechildren"}),"nodeChildren"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"optional-nodeparent"},Object(r.b)("inlineCode",{parentName:"h3"},"Optional")," nodeParent"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"nodeParent"),"? : ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Inherited from ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#optional-nodeparent"}),"nodeParent"))),Object(r.b)("h2",{id:"methods-1"},"Methods"),Object(r.b)("h3",{id:"addchild"},"addChild"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"addChild"),"(",Object(r.b)("inlineCode",{parentName:"p"},"childItem"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qtreewidgetitem"}),"QTreeWidgetItem"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Adds the specified child to this QTreeWidgetItem."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"childItem")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/classes/qtreewidgetitem"}),"QTreeWidgetItem")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The child to add.")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"child"},"child"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"child"),"(",Object(r.b)("inlineCode",{parentName:"p"},"index"),": number): ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qtreewidgetitem"}),"QTreeWidgetItem")," | undefined")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"index")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qtreewidgetitem"}),"QTreeWidgetItem")," | undefined")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"childcount"},"childCount"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"childCount"),"(): ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"data"},"data"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"data"),"(",Object(r.b)("inlineCode",{parentName:"p"},"column"),": number, ",Object(r.b)("inlineCode",{parentName:"p"},"role"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/enums/itemdatarole"}),"ItemDataRole"),"): ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qvariant"}),"QVariant"))),Object(r.b)("p",null,"Returns the value for the item's column and role."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"column")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The column.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"role")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/enums/itemdatarole"}),"ItemDataRole")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The role.")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qvariant"}),"QVariant"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"flags"},"flags"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"flags"),"(): ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/enums/itemflag"}),"ItemFlag"))),Object(r.b)("p",null,"Returns the flags used to describe the item. These determine whether the item can be checked, edited, and selected."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/enums/itemflag"}),"ItemFlag"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"ishidden"},"isHidden"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"isHidden"),"(): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"parent"},"parent"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"parent"),"(): ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qtreewidgetitem"}),"QTreeWidgetItem")," | undefined")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qtreewidgetitem"}),"QTreeWidgetItem")," | undefined")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setcheckstate"},"setCheckState"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setCheckState"),"(",Object(r.b)("inlineCode",{parentName:"p"},"column"),": number, ",Object(r.b)("inlineCode",{parentName:"p"},"state"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/enums/checkstate"}),"CheckState"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Sets the item in the given column check state to be state."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"column")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The column.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"state")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/enums/checkstate"}),"CheckState")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The check state.")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setdata"},"setData"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setData"),"(",Object(r.b)("inlineCode",{parentName:"p"},"column"),": number, ",Object(r.b)("inlineCode",{parentName:"p"},"role"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/enums/itemdatarole"}),"ItemDataRole"),", ",Object(r.b)("inlineCode",{parentName:"p"},"value"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/globals#qvarianttype"}),"QVariantType"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Sets the value for the item's column and role to the given value.\nThe role describes the type of data specified by value, and is defined by the ItemDataRole enum."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"column")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The column.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"role")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/enums/itemdatarole"}),"ItemDataRole")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The role.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"value")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/globals#qvarianttype"}),"QVariantType")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The value.")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setexpanded"},"setExpanded"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setExpanded"),"(",Object(r.b)("inlineCode",{parentName:"p"},"expanded"),": boolean): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"expanded")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setflags"},"setFlags"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setFlags"),"(",Object(r.b)("inlineCode",{parentName:"p"},"flags"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/enums/itemflag"}),"ItemFlag"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Sets the flags for the item to the given flags. These determine whether the item can be selected or modified.\nThis is often used to disable an item."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"flags")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/enums/itemflag"}),"ItemFlag")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The flags.")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"sethidden"},"setHidden"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setHidden"),"(",Object(r.b)("inlineCode",{parentName:"p"},"hide"),": boolean): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"hide")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setnodeparent"},"setNodeParent"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setNodeParent"),"(",Object(r.b)("inlineCode",{parentName:"p"},"parent?"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/component"}),"Component"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Inherited from ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#setnodeparent"}),"setNodeParent"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"parent?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/classes/component"}),"Component"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setselected"},"setSelected"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setSelected"),"(",Object(r.b)("inlineCode",{parentName:"p"},"selected"),": boolean): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"selected")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"settext"},"setText"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setText"),"(",Object(r.b)("inlineCode",{parentName:"p"},"column"),": number, ",Object(r.b)("inlineCode",{parentName:"p"},"text"),": string): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"column")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"text")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"text"},"text"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"text"),"(",Object(r.b)("inlineCode",{parentName:"p"},"column"),": number): ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"column")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"string")))}m.isMDXComponent=!0},471:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return s}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var i=b.a.createContext({}),m=function(e){var t=b.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=m(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=m(a),j=n,s=d["".concat(c,".").concat(j)]||d[j]||O[j]||r;return a?b.a.createElement(s,l(l({ref:t},i),{},{components:a})):b.a.createElement(s,l({ref:t},i))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=j;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<r;i++)c[i]=a[i];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);