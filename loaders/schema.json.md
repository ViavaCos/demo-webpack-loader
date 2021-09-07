# schema.json

```javascript

{
	// 指定options是什么数据类型, 一般都是object
    "type": "object",
    
    // 指定options中有什么属性
    "properties": {
    
    	// 这个属性的键名
        "name": {
        	// 指定这个属性的数据类型
            "type": "string",
            // 对这个属性的描述, 当数据类型不符合要求时，在报错中会提示出来。
            "description": "介是个名称"
        }
    },
    
    // 是否允许在options中写额外的属性(即properties中未指定的属性)
    // 如果值为false, 配置额外属性就会报错，
    // 并且报错信息中会将指定可配置的键名都提示出来。
    "addtionProperties": true
}

```