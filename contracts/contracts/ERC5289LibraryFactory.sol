// SPDX-License-Identifier: CC0-1.0
pragma solidity ^0.8.0;

import "./ERC5289Library.sol";

contract ERC5289LibraryFactory {
    // Change the mapping to store an array of libraries for each wallet
    mapping(address => ERC5289Library[]) private libraries;

    // Emitted when a new library is created
    event LibraryCreated(
        address indexed wallet,
        address libraryAddress,
        string title,
        string description
    );

    // Creates a new library contract and stores it in the mapping
    function createLibrary(
        string memory _title,
        string memory _description
    ) external {
        ERC5289Library newLibrary = new ERC5289Library(_title, _description);
        libraries[msg.sender].push(newLibrary);

        emit LibraryCreated(
            msg.sender,
            address(newLibrary),
            _title,
            _description
        );
    }

    // Returns the address of a specific library created by a wallet
    function getLibrary(
        address wallet,
        uint256 index
    ) external view returns (address) {
        require(
            index < libraries[wallet].length,
            "Library at this index does not exist"
        );
        return address(libraries[wallet][index]);
    }

    // Returns the address of all libraries created by a wallet
    function getLibraries(
        address wallet
    ) external view returns (address[] memory) {
        uint256 length = libraries[wallet].length;
        address[] memory libraryAddresses = new address[](length);

        for (uint256 i = 0; i < length; i++) {
            libraryAddresses[i] = address(libraries[wallet][i]);
        }

        return libraryAddresses;
    }
}
