Ext.define('DemoApp.view.AddField', {
    extend: 'Ext.Panel',
    config: {
        modal: true,
        centered: true,
        height: '80%',
        width: '50%',
        layout: {
            type: 'vbox',
            align: 'middle'
        },
        flex:2,
        items:[
        {
            xtype: 'container',
            layout: {
                type: 'vbox'
            },
            height: '100%',
            width: '100%',
            items:[
            { 
                xtype: 'textfield',
                label: 'Field Name',
                
                flex:1,
                id:'fieldName'
            }, {
                xtype: 'selectfield',
                label: 'Data Type',
                
                flex:1,
                id:'fieldDataType',
                options: [{
                    text: 'Numeric',
                    value: 'numeric'
                }, {
                    text: 'Boolean',
                    value: 'boolean'
                }, {
                    text: 'Text',
                    value: 'text'
                }, {
                    text: 'Text Area',
                    value: 'textarea'
                }, {
                    text: 'Coded',
                    value: 'coded'
                }]
            }, {
                xtype: 'textareafield',
                
                flex:3,
                label: 'Options',
                maxRows: 3,
                hidden: true,
                id:'options',
                placeHolder:'Writes Options in form: Option1,Option2,Option3'
            }, {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'center'
                },
                flex:1,
                items: [
                {
                    xtype: 'button',
                    id: 'saveField',
                    text: 'Save'
                },  {
                    xtype: 'button',
                    id: 'cancelAdd',
                    text: 'Cancel'
                }]
            }]
        }]
    }
})

