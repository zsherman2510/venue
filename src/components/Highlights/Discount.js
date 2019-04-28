import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utils/MyButton";
class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 30);
  }
  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.porcentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase Tickets Before December</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                neque, dolor, quo id hic cupiditate reiciendis praesentium odit
                eum numquam suscipit minima vitae accusantium nihil aliquam
                culpa repudiandae accusamus provident.Dolor exercitationem velit
                culpa nesciunt placeat perspiciatis deleniti quasi pariatur
                tenetur ullam. Nam omnis ad, fugiat accusamus molestiae hic,
                ratione explicabo repellat sequi iure quidem fuga quod suscipit
                dolores vel.
              </p>
              <MyButton
                text="Purchase Tickets"
                bck="#ffa800"
                color="#ffffff"
                link="http://www.instagram.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
