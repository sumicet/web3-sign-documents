// SPDX-License-Identifier: CC0-1.0
pragma solidity ^0.8.0;

/**
 * @title IERC5289Library
 * @notice This is the interface for the IERC5289Library library. It is
 * included in this contract so that the interface can be deployed to the
 * blockchain and registered in the EIP-1820 registry, making it discoverable
 * by other contracts.
 */
interface IERC5289Library {
    /**
     * @notice Emits a DocumentSigned event when a document is signed.
     */
    event DocumentSigned(address indexed signer, uint16 indexed documentId);

    /**
     * @notice Returns the legal text for a document.
     *
     * @param documentId The ID of the document.
     */
    function legalDocument(
        uint16 documentId
    ) external view returns (string memory);

    /**
     * @notice Returns true if a user has signed a document.
     *
     * @param user The address of the user.
     * @param documentId The ID of the document.
     */
    function documentSigned(
        address user,
        uint16 documentId
    ) external view returns (bool signed);

    /**
     * @notice Returns the timestamp when a user signed a document.
     *
     * @param user The address of the user.
     * @param documentId The ID of the document.
     */
    function documentSignedAt(
        address user,
        uint16 documentId
    ) external view returns (uint64 timestamp);

    /**
     * @notice Signs a document on behalf of a user.
     *
     * @param signer The address of the user.
     * @param documentId The ID of the document.
     */
    function signDocument(address signer, uint16 documentId) external;
}
