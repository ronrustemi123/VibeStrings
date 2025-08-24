import {gql} from "@apollo/client";

export const findAllBrands = gql`
query GetAllBrands {
  findAllBrands{
    id
    name
    origin
    image
    categories
  }
}`;

export const findBrandModels = gql`
  query GetBrandModels($id: ID!, $sortBy: sortBy!) {
    findBrandModels(id: $id, sortBy: $sortBy) {
      id
      name
      type
      image
      description
      price
      specs {
        bodyWood
        neckWood
        fingerboardWood
        pickups
        tuners
        scaleLength
        bridge
      }
      musicians {
        name
        musicianImage
        bands
      }
    }
  }
`

export const findUniqueBrand = gql`
  query GetUniqueBrand($id: ID!) {
    findUniqueBrand(id: $id) {
      id
      name
      origin
      image
      categories
      models {
        id
        name
        type
        image
        description
        price
        specs {
            bodyWood
            neckWood
            fingerboardWood
            pickups
            tuners
            scaleLength
            bridge
        }
        musicians {
            name
            musicianImage
            bands
        }
      }

    }
  }
`

export const searchModels = gql`
  query GetSearchModels($brandId: String!, $name: String!) {
    searchModels(brandId: $brandId, name: $name) {
      id
      name
      type
      image
      description
      price
        specs {
            bodyWood
            neckWood
            fingerboardWood
            pickups
            tuners
            scaleLength
            bridge
        }
        musicians {
            name
            musicianImage
            bands
        }
    }
  }
`;

export const findUniqueModel = gql`
    query GetUniqueModel($brandId: ID!, $modelId: ID!) {
        findUniqueModel(brandId: $brandId, modelId: $modelId) {
            id
            name
            type
            image
            description
            price
            specs {
                bodyWood
                neckWood
                fingerboardWood
                pickups
                tuners
                scaleLength
                bridge
            }
            musicians {
                name
                musicianImage
                bands
            }
        }
    }
`