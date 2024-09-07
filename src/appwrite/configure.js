const configure = {
    ApiEndpoint: String(import.meta.env.VITE_APPWRITE_API_ENDPOINT),
    ProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    DatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    authenticationCollectionId: String(
      import.meta.env.VITE_APPWRITE_AUTHENTICATION_COLLECTION_ID,
    ),
    blogsCollectionId: String(import.meta.env.VITE_APPWRITE_BLOGS_COLLECTION_ID),
    donationCollectionId: String(
      import.meta.env.VITE_APPWRITE_DONATION_COLLECTION_ID,
    ),
    jobPortalCollectionId: String(
      import.meta.env.VITE_APPWRITE_JOBPORTAL_COLLECTION_ID,
    ),
    profileCollectionId: String(
      import.meta.env.VITE_APPWRITE_PROFILE_COLLECTION_ID,
    ),
    profilePictureBucketId: String(
      import.meta.env.VITE_APPWRITE_PROFILE_PICTURE_BUCKET_ID,
    ),
    featuredImageBucketId: String(
      import.meta.env.VITE_APPWRITE_FEATURED_IMAGE_BUCKET_ID,
    ),
  };
  
  export default configure;