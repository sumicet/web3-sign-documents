import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { LibraryCreated } from "../generated/schema"
import { LibraryCreated as LibraryCreatedEvent } from "../generated/ERC5289LibraryFactory/ERC5289LibraryFactory"
import { handleLibraryCreated } from "../src/erc-5289-library-factory"
import { createLibraryCreatedEvent } from "./erc-5289-library-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let wallet = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let libraryAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newLibraryCreatedEvent = createLibraryCreatedEvent(
      wallet,
      libraryAddress
    )
    handleLibraryCreated(newLibraryCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("LibraryCreated created and stored", () => {
    assert.entityCount("LibraryCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "LibraryCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "wallet",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "LibraryCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "libraryAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
