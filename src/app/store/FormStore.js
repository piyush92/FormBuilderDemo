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
            encounter:'inPatient',
            fields: [
            {
                uuid:'ksdmksmd',
                field: 'Weigth',
                datatype: 'numeric',
                datatypeunit: 'Kgs'
            }, {
                uuid:'kdmdkfdk',
                field: 'Height',
                datatype: 'numeric',
                datatypeunit:'meter'
            }, {
                uuid:'idpwksk',
                field:'Is fat',
                datatype:'boolean',
                datatypeunit:null
            }
            ]
        }, {
            Name: 'Sysmtoms',
            encounter: 'outPatient',
            fields: [
            {
                uuid:'ksdjdjs',
                field:'Patient Name',
                datatype: 'text',
                datatypeunit:null
            }, {
                uuid:'kdkowkss',
                field:'Dehydration',
                datatype: 'boolean',
                datatypeunit:null
            }, {
                uuid: 'kdkskdl',
                field: 'Cold',
                datatype: 'boolean',
                datatypeunit:null
            }, {
                uuid: 'koqodd',
                field: 'Other symtoms',
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


