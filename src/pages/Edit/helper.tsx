export const getPropByPath = (obj: object, propString: string) => {
    if (!propString)
        return obj;

    var prop, props = propString.split('.');

    for (var i = 0, iLen = props.length - 1; i < iLen; i++) {
        prop = props[i];

        var candidate = obj[prop];
        if (candidate !== undefined) {
            obj = candidate;
        } else {
            break;
        }
    }
    return obj[props[i]];
}

export const generateFormData = () => {
    return ([
        {   
            label: 'status criticality:', 
            name: 'status.criticality',
            type: 'text'
        },
        {   
            label: 'address:', 
            name: 'address',
            type: 'text'
        },
        {   
            label: 'from latitude :', 
            name: 'position.from.latitude',
            type: 'number'
        },
        {   
            label: 'from longitude :', 
            name: 'position.from.longitude',
            type: 'number'
        },
        {   
            label: 'to latitude :', 
            name: 'position.to.latitude',
            type: 'number'
        },
        {   
            label: 'to longitude :', 
            name: 'position.to.longitude',
            type: 'number'
        },
        {   
            label: 'startTime :', 
            name: 'interval.startTime',
            type: 'string'
        },
        {   
            label: 'endTime :', 
            name: 'interval.endTime',
            type: 'string'
        },
        {   
            label: 'entry Time :', 
            name: 'interval.entryTime',
            type: 'string'
        }

    ])
}