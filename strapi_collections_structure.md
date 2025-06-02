
# 🗂️ Structure des Collections & Composants Strapi

## 📦 Collection Types

### `service`
- `title` (text)
- `description` (rich text)
- `category` (enumeration: vitrine, ecommerce, app, video, formation)
- `base_price` (number)
- `included_features` (component: list_item, repeatable)
- `optional_features` (component: list_item, repeatable)
- `icon` (media)
- `seo_keywords` (component: seo_keywords)

### `pricing_package`
- `title` (text)
- `description` (rich text)
- `starting_price` (number)
- `includes` (component: list_item, repeatable)
- `options` (component: list_item, repeatable)
- `related_service` (relation with service)
- `cta_label` (text)

### `project`
- `title` (text)
- `category` (text)
- `description` (rich text)
- `features` (component: list_item, repeatable)
- `images` (media, multiple)
- `project_link` (text)
- `testimonial` (relation with testimonial)
- `seo_keywords` (component: seo_keywords)

### `testimonial`
- `client_name` (text)
- `quote` (rich text)
- `client_photo` (media)
- `linked_project` (relation with project)

### `blog_post`
- `title` (text)
- `slug` (UID)
- `excerpt` (text)
- `content` (rich text)
- `cover_image` (media)
- `published_at` (date)
- `seo_keywords` (component: seo_keywords)

## 📄 Single Types

### `homepage`
- `hero_title` (text)
- `hero_description` (rich text)
- `services_highlight` (relation with service, multiple)
- `cta_label` (text)
- `seo_keywords` (component: seo_keywords)

### `about`
- `name` (text)
- `title` (text)
- `bio` (rich text)
- `competencies` (component: list_item, repeatable)
- `values` (component: list_item, repeatable)
- `profile_picture` (media)
- `seo_keywords` (component: seo_keywords)

### `contact`
- `email` (email)
- `phone` (text)
- `location` (text)
- `form_fields` (component: form_field, repeatable)
- `seo_keywords` (component: seo_keywords)

### `footer`
- `copyright_text`
- `social_links` (component: social_link, repeatable)
- `location_info` (text)
- `tags` (component: list_item, repeatable)

## 🧩 Components

### `seo_keywords`
- `keywords` (text, repeatable)

### `list_item`
- `label` (text)

### `form_field`
- `label` (text)
- `field_type` (enumeration: text, email, textarea, phone)
- `required` (boolean)

### `social_link`
- `platform` (text)
- `url` (text)
