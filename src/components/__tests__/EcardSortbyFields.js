import React from "react"
import renderer from "react-test-renderer" 
import Ecard from "../Ecard" 
import SortByFields from "../SortByFields"  
 
import './styles/index.less'


describe("Ecard & Sort fields", () => {
  it("Ecard and Sortfield components have has rended successfully ", () => {
    const tree = renderer
      .create(
          <div> 
        <Ecard /> 
        <SortByFields />  
        </div>
        )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})