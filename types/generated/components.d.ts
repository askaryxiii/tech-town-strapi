import type { Schema, Struct } from '@strapi/strapi';

export interface ProductsProductSpecs extends Struct.ComponentSchema {
  collectionName: 'components_products_product_specs';
  info: {
    displayName: 'product specs';
    icon: 'book';
  };
  attributes: {
    spec_name: Schema.Attribute.String & Schema.Attribute.Required;
    spec_value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'products.product-specs': ProductsProductSpecs;
    }
  }
}
