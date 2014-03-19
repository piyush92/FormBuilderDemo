Ext.define('DemoApp.view.Preview', {
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
            id: 'previewFormTitleBar',
            height: 44,
            docked: 'top',
            items: [
            {
                xtype: 'button',
                id: 'backToList',
                ui: 'back',
                text: 'Back'
            }
            ]
        }, {
            xtype: 'container',
            id: 'fieldContainer',
            width: '80%',
            layout: {
                type: 'vbox'
            }
        }]
    }
});