module.exports = ({ env }) => ({
    email: {
      config: {
        provider: "strapi-provider-email-mailjet",
        providerOptions: {
          publicApiKey: env("MAILJET_PUBLIC_KEY"),
          secretApiKey: env("MAILJET_SECRET_KEY"),
        },
        settings: {
          defaultFrom: "harikrishnamallavarapu4u@gmail.com",
          defaultFromName: "Hari Krishna",
          defaultTo:"harikrishnamallavarapu11@gmail.com"
        },
      },
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  });