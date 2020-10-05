import React from "react"
import renderer from "react-test-renderer"
import { Link } from "gatsby"
import Footer from "../Footer"


describe("Footer", () => {
    it("renders correctly as expected", () => {
        const tree = renderer
            .create(<Footer className={`footer`}>
                <div>
                    <h3 className={`footer__title`}>You made past the infinate scroll #yay </h3>

                    <div className={`footer__links`}>
                        <Link to="/">
                            info
          </Link>
                        <Link to="/">
                            marketing
          </Link>
                        <Link to="/">
                            support
          </Link>
                    </div>
                </div>
            </Footer>

            )
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})