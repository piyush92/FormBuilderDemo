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
                label: 'Form Name'
            },
            {
                xtype: 'selectfield',
                label: 'Encounter type',
                options: [{
                        text: 'In Patient',
                        value: 'inPatient'
                    }, {
                        text: 'Out Patient',
                        value: 'outPatien'
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
                    '<div>{field}&emsp; Datatype: {datatype}&emsp;'
                    ],
                },
                {
                    xtype: 'button',
                    text: 'add field'
                }
                ]
            }
            ]
        },
        {
            xtype: 'button',
            ui: 'confirm',
            text: 'Save'
        }
        ]
    }

});