/**
 * @desc  Property Descriptors Methods and Usage
 * 
 * Object.defineProperty(obj, propName, {})
 * Object.defineProperties(obj, props)
 * Object.getOwnPropertyNames(obj) 
 * Object.getOwnPropertyDescriptor(obj, prop) 
 * Object.getOwnPropertyDescriptors(obj) 
 * Object.keys(obj)
 * Object.values(obj) -- list of enumerable properties
 * Object.entries(obj) -- list of enumerable prop values
 * 
 * Object.propertyIsEnumerable(prop)
 * Object.hasOwnProperty(prop)
 * 
 * @desc Objects can be
 * 1. Extensible -- new properties added
 * 2. Frozen -- props cannot be changed in any way
 * 3. Sealed -- props cannot be deleted or configured. (still writable)
 * 
 * @desc Object Properties can be
 * 1. Writable -- change of value
 * 2. Enumerable -- seen through for...in loop
 * 3. Configurable -- change the property descriptors
 * 
 * Object.isExtensible(obj)
 * Object.isFrozen(obj)
 * Object.isSealed(obj)
 * Object.preventExtensions(obj)
 * Object.freeze(obj)
 * Object.seal(obj)
 * 
 * @desc DESCRIPTOR GROUPS
 * DATA             ACCESSOR
 * value            get
 * writable         set
 * configurable     configurable
 * enumerable       enumerable
 * 
 */

let obj, props, propName, prop;

Object.defineProperty(obj, propName, {});
Object.defineProperties(obj, props);
Object.getOwnPropertyNames(obj);
Object.getOwnPropertyDescriptor(obj, prop);
Object.getOwnPropertyDescriptors(obj);
Object.keys(obj);
Object.values(obj);
Object.entries(obj);

Object.propertyIsEnumerable(prop);
Object.hasOwnProperty(prop);

Object.isExtensible(obj);
Object.isFrozen(obj);
Object.isSealed(obj);
Object.preventExtensions(obj);
Object.freeze(obj);
Object.seal(obj);
