import { CodeChallengeMethod } from "../code_verifiers/verifier";
import { OAuthClient } from "../entities/client.entity";
import { OAuthScope } from "../entities/scope.entity";
import { OAuthUser } from "../entities/user.entity";
import { GrantIdentifier } from "../grants/abstract/grant.interface";

export class AuthorizationRequest {
  scopes: OAuthScope[] = [];
  isAuthorizationApproved: boolean;
  redirectUri: string | undefined;
  state?: string;
  codeChallenge?: string;
  codeChallengeMethod?: CodeChallengeMethod;

  constructor(
    public readonly grantTypeId: GrantIdentifier,
    public readonly client: OAuthClient,
    redirectUri?: string,
    public user?: OAuthUser,
  ) {
    this.scopes = [];
    this.isAuthorizationApproved = false;
    this.redirectUri = redirectUri ?? client.redirectUris[0] ?? undefined;
  }
}
