/*
    Validate Node based on type while inserting
    Exception if trying to access private prop
    Reverse the Node List
*/

const TYPES = {
    any: 'ANY',
    object: 'OBJ',
    array: 'ARR',
    boolean: 'BOOL',
    number: 'NUM',
    string: 'STR',
    date: 'DATE',
    set: 'SET',
    map: 'MAP',
    symbol: 'SYM'
}

const typeMapping = {
    OBJ: 'object',
    // ARR: 'array',
    BOOL: 'boolean',
    NUM: 'number',
    STR: 'string',
    SYM: 'symbol'
    // DATE: 'Date'
}

function Stack(type) {
    if(!Object.values(TYPES).includes(type))
        type = TYPES.any
    typeOfStack = type
    nodes = []

    validate = (node) => {
        type = typeof node
        // if(Object.values(typeMapping).includes(type) && type === typeMapping[typeOfStack]) {
        //     console.log(type, typeMapping[typeOfStack])
        //     return true 
        // }
        // else if(node instanceof Date && typeOfStack === TYPES.date) {
        //     console.log('Date validated')
        //     return true
        // }

        return 
        Object.values(typeMapping).includes(type) && type === typeMapping[typeOfStack]
        || node instanceof Date && typeOfStack === TYPES.date
        || node instanceof Set && typeOfStack === TYPES.set
        || node instanceof Map && typeOfStack === TYPES.map
        || node instanceof Array && typeOfStack === TYPES.array
    }

    reverse = (nodeList) => {
        return nodeList
    }
    
    readNodes = (nodeList) => {
        nodeList.forEach(node => {
            console.log(node)
        })
    }

    this.read = (inStackingOrder = true) => {
        if (nodes.length > 0) {
            if(inStackingOrder)
                readNodes(nodes)
            else
                readNodes(reverse(nodes))
        }
        else
            console.log('Stack is empty')
    }

    this.getType = () => typeOfStack

    this.push = (node) => {
        if (node && validate(node)) {
            nodes.push(node)
            console.log(`${node} is stacked`)
        }
    }

    this.pop = () => {
        if (nodes.length > 0)
            console.log(`${nodes.pop()} is un-stacked`)
        else
            console.log('Stack is empty')
    }

    this.purge = () => nodes = []

    this.length = nodes.length
}

module.exports.Stack = Stack
module.exports.types = TYPES