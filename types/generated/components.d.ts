import type { Schema, Struct } from '@strapi/strapi';

export interface CategorieTest extends Struct.ComponentSchema {
  collectionName: 'components_categorie_tests';
  info: {
    displayName: 'test';
    icon: 'shield';
  };
  attributes: {
    ezfefe: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'categorie.test': CategorieTest;
    }
  }
}
