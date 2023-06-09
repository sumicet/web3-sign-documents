/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  ERC5289LibraryFactory,
  ERC5289LibraryFactoryInterface,
} from "../ERC5289LibraryFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "libraryAddress",
        type: "address",
      },
    ],
    name: "LibraryCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_title",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
    ],
    name: "createLibrary",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "getLibraries",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getLibrary",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506120fe806100206000396000f3fe60806040523480156200001157600080fd5b5060043610620000465760003560e01c8063078b55e6146200004b5780632635628b146200006b5780634ffcd50514620000a1575b600080fd5b62000069600480360381019062000063919062000630565b620000d7565b005b62000089600480360381019062000083919062000755565b6200020a565b604051620000989190620007ad565b60405180910390f35b620000bf6004803603810190620000b99190620007ca565b62000318565b604051620000ce9190620008ca565b60405180910390f35b60008282604051620000e990620004ac565b620000f692919062000977565b604051809103906000f08015801562000113573d6000803e3d6000fd5b5090506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff167fc4716a09888f5b6174948058fad9851275f2c61d163f63b083183c3c70fba3a382604051620001fd9190620007ad565b60405180910390a2505050565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050821062000292576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002899062000a28565b60405180910390fd5b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110620002e557620002e462000a4a565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905092915050565b606060008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050905060008167ffffffffffffffff8111156200037f576200037e620004e9565b5b604051908082528060200260200182016040528015620003ae5781602001602082028036833780820191505090505b50905060005b82811015620004a1576000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020818154811062000410576200040f62000a4a565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682828151811062000451576200045062000a4a565b5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508080620004989062000aa8565b915050620003b4565b508092505050919050565b6115d38062000af683390190565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200052382620004d8565b810181811067ffffffffffffffff82111715620005455762000544620004e9565b5b80604052505050565b60006200055a620004ba565b905062000568828262000518565b919050565b600067ffffffffffffffff8211156200058b576200058a620004e9565b5b6200059682620004d8565b9050602081019050919050565b82818337600083830152505050565b6000620005c9620005c3846200056d565b6200054e565b905082815260208101848484011115620005e857620005e7620004d3565b5b620005f5848285620005a3565b509392505050565b600082601f830112620006155762000614620004ce565b5b813562000627848260208601620005b2565b91505092915050565b600080604083850312156200064a5762000649620004c4565b5b600083013567ffffffffffffffff8111156200066b576200066a620004c9565b5b6200067985828601620005fd565b925050602083013567ffffffffffffffff8111156200069d576200069c620004c9565b5b620006ab85828601620005fd565b9150509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620006e282620006b5565b9050919050565b620006f481620006d5565b81146200070057600080fd5b50565b6000813590506200071481620006e9565b92915050565b6000819050919050565b6200072f816200071a565b81146200073b57600080fd5b50565b6000813590506200074f8162000724565b92915050565b600080604083850312156200076f576200076e620004c4565b5b60006200077f8582860162000703565b925050602062000792858286016200073e565b9150509250929050565b620007a781620006d5565b82525050565b6000602082019050620007c460008301846200079c565b92915050565b600060208284031215620007e357620007e2620004c4565b5b6000620007f38482850162000703565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6200083381620006d5565b82525050565b600062000847838362000828565b60208301905092915050565b6000602082019050919050565b60006200086d82620007fc565b62000879818562000807565b9350620008868362000818565b8060005b83811015620008bd578151620008a1888262000839565b9750620008ae8362000853565b9250506001810190506200088a565b5085935050505092915050565b60006020820190508181036000830152620008e6818462000860565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156200092a5780820151818401526020810190506200090d565b60008484015250505050565b60006200094382620008ee565b6200094f8185620008f9565b9350620009618185602086016200090a565b6200096c81620004d8565b840191505092915050565b6000604082019050818103600083015262000993818562000936565b90508181036020830152620009a9818462000936565b90509392505050565b7f4c696272617279206174207468697320696e64657820646f6573206e6f74206560008201527f7869737400000000000000000000000000000000000000000000000000000000602082015250565b600062000a10602483620008f9565b915062000a1d82620009b2565b604082019050919050565b6000602082019050818103600083015262000a438162000a01565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000ab5826200071a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820362000aea5762000ae962000a79565b5b60018201905091905056fe60806040523480156200001157600080fd5b50604051620015d3380380620015d383398181016040528101906200003791906200021b565b604051806040016040528083815260200182815250600080820151816000019081620000649190620004eb565b5060208201518160010190816200007c9190620004eb565b509050505050620005d2565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620000f182620000a6565b810181811067ffffffffffffffff82111715620001135762000112620000b7565b5b80604052505050565b60006200012862000088565b9050620001368282620000e6565b919050565b600067ffffffffffffffff821115620001595762000158620000b7565b5b6200016482620000a6565b9050602081019050919050565b60005b838110156200019157808201518184015260208101905062000174565b60008484015250505050565b6000620001b4620001ae846200013b565b6200011c565b905082815260208101848484011115620001d357620001d2620000a1565b5b620001e084828562000171565b509392505050565b600082601f8301126200020057620001ff6200009c565b5b8151620002128482602086016200019d565b91505092915050565b6000806040838503121562000235576200023462000092565b5b600083015167ffffffffffffffff81111562000256576200025562000097565b5b6200026485828601620001e8565b925050602083015167ffffffffffffffff81111562000288576200028762000097565b5b6200029685828601620001e8565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002f357607f821691505b602082108103620003095762000308620002ab565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003737fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000334565b6200037f868362000334565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003cc620003c6620003c08462000397565b620003a1565b62000397565b9050919050565b6000819050919050565b620003e883620003ab565b62000400620003f782620003d3565b84845462000341565b825550505050565b600090565b6200041762000408565b62000424818484620003dd565b505050565b5b818110156200044c57620004406000826200040d565b6001810190506200042a565b5050565b601f8211156200049b5762000465816200030f565b620004708462000324565b8101602085101562000480578190505b620004986200048f8562000324565b83018262000429565b50505b505050565b600082821c905092915050565b6000620004c060001984600802620004a0565b1980831691505092915050565b6000620004db8383620004ad565b9150826002028217905092915050565b620004f682620002a0565b67ffffffffffffffff811115620005125762000511620000b7565b5b6200051e8254620002da565b6200052b82828562000450565b600060209050601f8311600181146200056357600084156200054e578287015190505b6200055a8582620004cd565b865550620005ca565b601f19841662000573866200030f565b60005b828110156200059d5784890151825560018201915060208501945060208101905062000576565b86831015620005bd5784890151620005b9601f891682620004ad565b8355505b6001600288020188555050505b505050505050565b610ff180620005e26000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806320d703dd146100675780632a41864214610083578063747f0038146100b35780637a5b4f59146100e35780638968f99714610102578063dba0f8d21461011e575b600080fd5b610081600480360381019061007c9190610957565b61014e565b005b61009d600480360381019061009891906109e2565b61023d565b6040516100aa9190610a3d565b60405180910390f35b6100cd60048036038101906100c89190610a58565b6102c0565b6040516100da9190610b04565b60405180910390f35b6100eb61036d565b6040516100f9929190610b26565b60405180910390f35b61011c600480360381019061011791906109e2565b610499565b005b610138600480360381019061013391906109e2565b610626565b6040516101459190610b80565b60405180910390f35b81600260008561ffff1661ffff16815260200190815260200160002090816101769190610db1565b5060005b81518110156102375767ffffffffffffffff600360008661ffff1661ffff16815260200190815260200160002060008484815181106101bc576101bb610e83565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550808061022f90610ee1565b91505061017a565b50505050565b600080600360008461ffff1661ffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900467ffffffffffffffff1667ffffffffffffffff1611905092915050565b6060600260008361ffff1661ffff16815260200190815260200160002080546102e890610bca565b80601f016020809104026020016040519081016040528092919081815260200182805461031490610bca565b80156103615780601f1061033657610100808354040283529160200191610361565b820191906000526020600020905b81548152906001019060200180831161034457829003601f168201915b50505050509050919050565b60608060008001600060010181805461038590610bca565b80601f01602080910402602001604051908101604052809291908181526020018280546103b190610bca565b80156103fe5780601f106103d3576101008083540402835291602001916103fe565b820191906000526020600020905b8154815290600101906020018083116103e157829003601f168201915b5050505050915080805461041190610bca565b80601f016020809104026020016040519081016040528092919081815260200182805461043d90610bca565b801561048a5780601f1061045f5761010080835404028352916020019161048a565b820191906000526020600020905b81548152906001019060200180831161046d57829003601f168201915b50505050509050915091509091565b67ffffffffffffffff8016600360008361ffff1661ffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900467ffffffffffffffff1667ffffffffffffffff161461055b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055290610f9b565b60405180910390fd5b42600360008361ffff1661ffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055508061ffff168273ffffffffffffffffffffffffffffffffffffffff167f19e2d5cebbefe3a7ba8a439b6e9d2f1067313d68fb1205c84b1a01b0a738972460405160405180910390a35050565b6000600360008361ffff1661ffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900467ffffffffffffffff16905092915050565b6000604051905090565b600080fd5b600080fd5b600061ffff82169050919050565b6106c8816106b1565b81146106d357600080fd5b50565b6000813590506106e5816106bf565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61073e826106f5565b810181811067ffffffffffffffff8211171561075d5761075c610706565b5b80604052505050565b600061077061069d565b905061077c8282610735565b919050565b600067ffffffffffffffff82111561079c5761079b610706565b5b6107a5826106f5565b9050602081019050919050565b82818337600083830152505050565b60006107d46107cf84610781565b610766565b9050828152602081018484840111156107f0576107ef6106f0565b5b6107fb8482856107b2565b509392505050565b600082601f830112610818576108176106eb565b5b81356108288482602086016107c1565b91505092915050565b600067ffffffffffffffff82111561084c5761084b610706565b5b602082029050602081019050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061088d82610862565b9050919050565b61089d81610882565b81146108a857600080fd5b50565b6000813590506108ba81610894565b92915050565b60006108d36108ce84610831565b610766565b905080838252602082019050602084028301858111156108f6576108f561085d565b5b835b8181101561091f578061090b88826108ab565b8452602084019350506020810190506108f8565b5050509392505050565b600082601f83011261093e5761093d6106eb565b5b813561094e8482602086016108c0565b91505092915050565b6000806000606084860312156109705761096f6106a7565b5b600061097e868287016106d6565b935050602084013567ffffffffffffffff81111561099f5761099e6106ac565b5b6109ab86828701610803565b925050604084013567ffffffffffffffff8111156109cc576109cb6106ac565b5b6109d886828701610929565b9150509250925092565b600080604083850312156109f9576109f86106a7565b5b6000610a07858286016108ab565b9250506020610a18858286016106d6565b9150509250929050565b60008115159050919050565b610a3781610a22565b82525050565b6000602082019050610a526000830184610a2e565b92915050565b600060208284031215610a6e57610a6d6106a7565b5b6000610a7c848285016106d6565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610abf578082015181840152602081019050610aa4565b60008484015250505050565b6000610ad682610a85565b610ae08185610a90565b9350610af0818560208601610aa1565b610af9816106f5565b840191505092915050565b60006020820190508181036000830152610b1e8184610acb565b905092915050565b60006040820190508181036000830152610b408185610acb565b90508181036020830152610b548184610acb565b90509392505050565b600067ffffffffffffffff82169050919050565b610b7a81610b5d565b82525050565b6000602082019050610b956000830184610b71565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610be257607f821691505b602082108103610bf557610bf4610b9b565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610c5d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610c20565b610c678683610c20565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000610cae610ca9610ca484610c7f565b610c89565b610c7f565b9050919050565b6000819050919050565b610cc883610c93565b610cdc610cd482610cb5565b848454610c2d565b825550505050565b600090565b610cf1610ce4565b610cfc818484610cbf565b505050565b5b81811015610d2057610d15600082610ce9565b600181019050610d02565b5050565b601f821115610d6557610d3681610bfb565b610d3f84610c10565b81016020851015610d4e578190505b610d62610d5a85610c10565b830182610d01565b50505b505050565b600082821c905092915050565b6000610d8860001984600802610d6a565b1980831691505092915050565b6000610da18383610d77565b9150826002028217905092915050565b610dba82610a85565b67ffffffffffffffff811115610dd357610dd2610706565b5b610ddd8254610bca565b610de8828285610d24565b600060209050601f831160018114610e1b5760008415610e09578287015190505b610e138582610d95565b865550610e7b565b601f198416610e2986610bfb565b60005b82811015610e5157848901518255600182019150602085019450602081019050610e2c565b86831015610e6e5784890151610e6a601f891682610d77565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610eec82610c7f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610f1e57610f1d610eb2565b5b600182019050919050565b7f5369676e65722068617320616c7265616479207369676e6564206f722073696760008201527f6e6572206e6f7420616c6c6f7765640000000000000000000000000000000000602082015250565b6000610f85602f83610a90565b9150610f9082610f29565b604082019050919050565b60006020820190508181036000830152610fb481610f78565b905091905056fea264697066735822122058c270eef8a7c5ff4081c4e84d150dd5b2e01b528cfaf7d90b42883a4fd1497464736f6c63430008120033a2646970667358221220a29016ed9a690ec0673ab69ced6d9302600fe11da670058e6e812b2df5bcaab464736f6c63430008120033";

type ERC5289LibraryFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC5289LibraryFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC5289LibraryFactory__factory extends ContractFactory {
  constructor(...args: ERC5289LibraryFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      ERC5289LibraryFactory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): ERC5289LibraryFactory__factory {
    return super.connect(runner) as ERC5289LibraryFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC5289LibraryFactoryInterface {
    return new Interface(_abi) as ERC5289LibraryFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ERC5289LibraryFactory {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ERC5289LibraryFactory;
  }
}
