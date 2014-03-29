Ext.define('DemoApp.view.FormView', {
    extend: 'Ext.Panel',

    config: {
        layout: {
            align: 'center',
            type: 'vbox'
        },
        scrollable: true,
        items: [
        {
            xtype: 'titlebar',
            
            height: 44,
            docked: 'top',
            id: 'addeditFormTitle',
            title: 'Add New From',
            items: [
            {
                xtype: 'button',
                id: 'backToList',
                ui: 'back',
                text: 'Back'
            }
            ]
        },
            
        {
            xtype: 'container',
            width: '80%',
            layout: {
                type: 'vbox'
            },
            items: [{
                xtype: 'textfield',
                label: 'Form Name',
                id:'formName',
                border: '0 0 1 0',
                style: ' border-style: solid;'
                    
            },
            {
                xtype: 'selectfield',
                label: 'Encounter type',
                id:'encounterField',
                options: [{
                        text: 'In Patient',
                        value: 'inPatient'
                    }, {
                        text: 'Out Patient',
                        value: 'outPatient'
                    }, {
                        text: 'Pharmacy',
                        value: 'pharmacy'
                    }]
            },
            {
                xtype: 'fieldset',
                title: 'Form Fields',
                items: [
                {
                    xtype: 'list',
                    id: 'formFields',
                    height: 300,
                    layout: {
                        type: 'fit'
                    },
                    itemTpl: [
                    '<div>{field}&emsp; ({datatype})'
                    ],
                },
                {
                    xtype: 'button',
                    id: 'addFieldButton',
                    text: 'add field'
                }
                ]
            }
            ]
        },
        {
            xtype: 'button',
            ui: 'confirm',
            text: 'Save',
            id: 'saveForm'
        }
        ]
    }

});