import { Signer, BytesLike } from "ethers";
import { SublimeConfig } from "sublimeConfig";

import { Verification } from "../wrappers/Verification";
import { Verification__factory } from "../wrappers/factories/Verification__factory"

export class VerificationAPI {
    private signer: Signer;
    private verification: Verification;

    constructor(signer: Signer, config: SublimeConfig) {
        this.signer = signer;
        this.verification = new Verification__factory(this.signer).attach(config.verificationContractAddress);
    }

    public async getOffchainDetails(user: string) : Promise<BytesLike> {
        return this.verification.registeredUsers(user);
    }

    public async isUser(user: string) : Promise<boolean> {
        return this.verification.isUser(user);
    }
}