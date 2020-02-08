export interface SignInOutput {
  readonly id: string
  readonly firstname: string
  readonly lastname: string
  readonly username: string
  readonly createdAt: Date
  readonly updatedAt: Date,
  readonly authorization: string
}
