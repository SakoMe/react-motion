import React, { Component } from 'react';
import styled from 'styled-components';
import ImageBoxAnimated from './ImageBoxAnimated';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class App extends Component {
  componentWillMount() {
    this.setState({
      startFirstBoxAnimation: false,
      startSecondBoxAnimation: true,
    });
  }

  render() {
    const { startFirstBoxAnimation, startSecondBoxAnimation } = this.state;

    return (
      <Wrapper>
        <ImageBoxAnimated
          image={
            'http://res.cloudinary.com/devwheel/image/upload/v1511829666/16359581589_ef5f27bf1d_k_abhzft.jpg'
          }
          width={800}
          height={500}
          noOfRows={8}
          speed={200}
          startAnimation={startFirstBoxAnimation}
          onClick={() =>
            this.setState({ startFirstBoxAnimation: !startFirstBoxAnimation })
          }
        />
        <ImageBoxAnimated
          image={
            'http://res.cloudinary.com/devwheel/image/upload/v1511811555/16544165381_f791c7b0e2_z_on6hcq.jpg'
          }
          style={{ marginLeft: -15, zIndex: 1 }}
          width={`500px`}
          height={`300px`}
          noOfRows={4}
          speed={100}
          startAnimation={startSecondBoxAnimation}
          onClick={() =>
            this.setState({ startSecondBoxAnimation: !startSecondBoxAnimation })
          }
        />
      </Wrapper>
    );
  }
}

export default App;
