Ext.define('DemoApp.view.Viewport', {
    extend: 'Ext.Panel',
    requires: ['DemoApp.store.FormStore', 'DemoApp.model.Form', 'DemoApp.model.FormFields'],
    config: {
        layout: {
            align: 'center',
            type: 'vbox'
        },
        fillscreen:true,
        items: [
        {
           xtype: 'titlebar',
            
            height: 44,
            docked: 'top',
            title: 'Forms'
        },
        {
            xtype: 'container',
            width: '80%',
            border: 1,
            margin: 10,
            layout: {
                align: 'center',
                type: 'vbox'
            },
            style: 'background-color:#FFFFFF',
            items: [
            {
                xtype: 'button',
                ui: 'action',
                id:'addForm',
                width: '100%',
                heigth: 50,
                text: 'Add Form'
            },
            {
                xtype: 'list',
                id:'formlist',
                border: 3,
                width: '100%',
                styleHtmlContent: true,
                layout:'fit',
                useComponents:true,
                store: Ext.create('DemoApp.store.FormStore'),
                itemTpl:['<div>{Name},{encountor}<button class="edit">Edit</button><button class="preview">preview</button></div>'],
                
            }
            ]
        }]
    }

});