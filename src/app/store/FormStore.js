Ext.define('DemoApp.store.FormStore', {
    extend: 'Ext.data.Store',
    requires: 'DemoApp.model.Form',
    config: {
        model: 'DemoApp.model.Form',
        autoLoad:true,
        proxy:{
 
            type:'localstorage'
 
        },
        data:[
        {
            Name:'Fitness',
            encounter:'inpatient',
            fields: [
            {
                uuid:'ksdmksmd',
                field: 'weigth',
                datatype: 'numeric',
                datatypeunit: 'Kgs'
            }, {
                uuid:'kdmdkfdk',
                field: 'height',
                datatype: 'numeric',
                datatypeunit:'meter'
            }, {
                uuid:'idpwksk',
                field:'is fat',
                datatype:'boolean',
                datatypeunit:null
            }
            ]
        }, {
            Name: 'Sysmtoms',
            encounter: 'outpatient',
            fields: [
            {
                uuid:'ksdjdjs',
                field:'patient name',
                datatype: 'text',
                datatypeunit:null
            }, {
                uuid:'kdkowkss',
                field:'dehydration',
                datatype: 'boolean',
                datatypeunit:null
            }, {
                uuid: 'kdkskdl',
                field: 'cold',
                datatype: 'boolean',
                datatypeunit:null
            }, {
                uuid: 'koqodd',
                field: 'other symtoms',
                datatype:'textarea',
                datatypeunit:null
            }, {
                uuid: 'sodjooxk',
                field: 'Illness',
                datatype: 'coded',
                datatypeunit: null,
                codedOptions:[
                {
                    text: 'ABS',
                    value: 'abc'
                },   {
                    text: 'XYZ',
                    value: 'xyz'
                },   {
                    text: 'PQR',
                    value: 'pqr'
                },
                ]
            }
            ]
        }
        ]
    }
});


