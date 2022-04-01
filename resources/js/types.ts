export interface Auth {
  user: {
    id: number
    first_name: string
    last_name: string
    email: string
    owner: boolean
    account: {
      id: number
      name: string
    }
  } | null
}

export interface ModelPagination<Model> {
  data: Model[]
  links: PaginationLink[]
}

export interface PaginationLink {
  url: string | null
  label: string
  active: boolean
}

export interface Filters {
  search: string | null
  role: string | null
  trashed: string | null
}
