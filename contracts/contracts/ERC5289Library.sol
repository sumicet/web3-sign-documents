// SPDX-License-Identifier: CC0-1.0
pragma solidity ^0.8.0;

import "./IERC5289Library.sol";

contract ERC5289Library is IERC5289Library {
    struct Metadata {
        string title;
        string description;
    }

    Metadata private metadata;
    mapping(uint16 => string) private legalDocuments;
    mapping(uint16 => mapping(address => uint64)) private signerStatus;

    constructor(string memory _title, string memory _description) {
        metadata = Metadata(_title, _description);
    }

    function getMetadata()
        public
        view
        returns (string memory title, string memory description)
    {
        return (metadata.title, metadata.description);
    }

    function legalDocument(
        uint16 documentId
    ) external view override returns (string memory) {
        return legalDocuments[documentId];
    }

    function documentSigned(
        address signer,
        uint16 documentId
    ) external view override returns (bool signed) {
        return signerStatus[documentId][signer] > 0;
    }

    function documentSignedAt(
        address signer,
        uint16 documentId
    ) external view override returns (uint64 timestamp) {
        return signerStatus[documentId][signer];
    }

    function signDocument(address signer, uint16 documentId) external override {
        require(
            signerStatus[documentId][signer] == type(uint64).max,
            "Signer has already signed or signer not allowed"
        );

        signerStatus[documentId][signer] = uint64(block.timestamp);

        emit DocumentSigned(signer, documentId);
    }

    function addLegalDocument(
        uint16 documentId,
        string memory document,
        address[] memory signers
    ) external {
        legalDocuments[documentId] = document;
        for (uint i = 0; i < signers.length; i++) {
            signerStatus[documentId][signers[i]] = type(uint64).max;
        }
    }
}
