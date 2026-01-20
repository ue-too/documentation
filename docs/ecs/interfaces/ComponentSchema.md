[@ue-too/ecs](../globals.md) / ComponentSchema

# Interface: ComponentSchema

Defined in: [index.ts:210](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L210)

Schema definition for a component type that can be defined at runtime.

## Properties

### componentName

> **componentName**: `symbol`

Defined in: [index.ts:212](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L212)

The name of the component type (using Symbol for type safety)

***

### fields

> **fields**: [`ComponentFieldDefinition`](../type-aliases/ComponentFieldDefinition.md)[]

Defined in: [index.ts:214](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/ecs/src/index.ts#L214)

Array of field definitions
