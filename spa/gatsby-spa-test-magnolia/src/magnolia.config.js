import Content from "./editablePages/Content"
import Headline from "./components/Headline"
import Image from "./components/Image"
import RichText from "./components/RichText"
import Hero from "./components/Hero"
import Cta from "./components/Cta"

const config = {
  componentMappings: {
    "gatsby-spa-test-lm:pages/content": Content,

    "spa-test-lm:components/headline": Headline,
    "spa-test-lm:components/image": Image,
    "spa-test-lm:components/richtext": RichText,
    "spa-test-lm:components/hero": Hero,
    "spa-test-lm:components/cta": Cta,

  },
}

export default config
