import type { Schema, Struct } from '@strapi/strapi';

export interface FormFieldFormField extends Struct.ComponentSchema {
  collectionName: 'components_form_field_form_fields';
  info: {
    displayName: 'form_field';
  };
  attributes: {};
}

export interface ListItemListItem extends Struct.ComponentSchema {
  collectionName: 'components_list_item_list_items';
  info: {
    displayName: 'list_item';
  };
  attributes: {};
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    metaKeywords: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'form-field.form-field': FormFieldFormField;
      'list-item.list-item': ListItemListItem;
      'shared.seo': SharedSeo;
    }
  }
}
