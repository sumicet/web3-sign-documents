const { expect } = require('chai');
const { ethers } = require('hardhat');
import { ERC5289Library, ERC5289LibraryFactory } from '../types';

const addressZero = '0x0000000000000000000000000000000000000000';

describe('ERC5289', function () {
    let erc5289Library: ERC5289Library;
    let erc5289LibraryFactory: ERC5289LibraryFactory;
    let ownerAddress: string;
    let addr1Address: string;
    let unapprovedAddress: string;

    beforeEach(async function () {
        // Get the ContractFactory and Signers here.
        const ERC5289LibraryFactory = await ethers.getContractFactory('ERC5289LibraryFactory');

        const [owner, addr1, unapproved] = await ethers.getSigners();
        ownerAddress = await owner.getAddress();
        addr1Address = await addr1.getAddress();
        unapprovedAddress = await unapproved.getAddress();

        erc5289LibraryFactory = await ERC5289LibraryFactory.deploy();

        await erc5289LibraryFactory.createLibrary('Title', 'Description');
        const newLibraryAddress = await erc5289LibraryFactory.getLibrary(ownerAddress, 0);
        erc5289Library = (await ethers.getContractAt(
            'ERC5289Library',
            newLibraryAddress
        )) as ERC5289Library;
    });

    describe('ERC5289LibraryFactory', function () {
        it('Should get a specific library', async function () {
            const libraryAddress = await erc5289LibraryFactory.getLibrary(ownerAddress, 0);
            expect(libraryAddress).to.not.equal(addressZero);
        });

        it('Should get all libraries', async function () {
            const libraryAddresses = await erc5289LibraryFactory.getLibraries(ownerAddress);
            expect(libraryAddresses.length).to.equal(1);
        });
    });

    describe('ERC5289Library', function () {
        it('Should sign the document', async function () {
            await erc5289Library.addLegalDocument(1, 'This is a legal document', [addr1Address]);

            await erc5289Library.signDocument(addr1Address, 1);
            expect(await erc5289Library.documentSigned(addr1Address, 1)).to.equal(true);
        });

        it('Should not sign the document again', async function () {
            await erc5289Library.addLegalDocument(1, 'This is a legal document', [addr1Address]);

            await erc5289Library.signDocument(addr1Address, 1);
            await expect(erc5289Library.signDocument(addr1Address, 1)).to.be.revertedWith(
                'Signer has already signed or signer not allowed'
            );
        });

        it('Should not sign the document if not allowed', async function () {
            await erc5289Library.addLegalDocument(1, 'This is a legal document', [addr1Address]);
            console.log(addr1Address, unapprovedAddress);

            await expect(erc5289Library.signDocument(unapprovedAddress, 1)).to.be.revertedWith(
                'Signer has already signed or signer not allowed'
            );
        });

        it('Should retrieve the legal document', async function () {
            const documentContent = 'This is a legal document';
            await erc5289Library.addLegalDocument(1, documentContent, [addr1Address]);
            expect(await erc5289Library.legalDocument(1)).to.equal(documentContent);
        });
    });
});
