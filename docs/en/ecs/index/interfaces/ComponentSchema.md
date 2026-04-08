[@ue-too/ecs](../../modules.md) / [index](../index.md) / ComponentSchema

# Interface: ComponentSchema

Defined in: [index.ts:212](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/ecs/src/index.ts#L212)

Schema definition for a component type that can be defined at runtime.

## Properties

### componentName

> **componentName**: `symbol`

Defined in: [index.ts:214](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/ecs/src/index.ts#L214)

The name of the component type (using Symbol for type safety)

***

### fields

> **fields**: [`ComponentFieldDefinition`](../type-aliases/ComponentFieldDefinition.md)[]

Defined in: [index.ts:216](https://github.com/ue-too/ue-too/blob/feb7c80222df5d3cd97bfa1933bafe3190c6e48d/packages/ecs/src/index.ts#L216)

Array of field definitions
