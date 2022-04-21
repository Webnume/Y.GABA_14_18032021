// Form.test.js
import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Form from './Form'

test('rendering and submitting a basic React Hook form', async () => {
  const handleSubmit = jest.fn()
  render(<Form onSubmit={handleSubmit} />)
  const user = userEvent.setup()

  await user.type(screen.getByLabelText(/first name/i), 'John')
  await user.type(screen.getByLabelText(/last name/i), 'Dee')
  await user.type(screen.getByLabelText(/email/i), 'john.dee@someemail.com')

  await user.click(screen.getByRole('button', {name: /submit/i}))

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'john.dee@someemail.com',
      firstName: 'John',
      lastName: 'Dee',
    }),
  )
})

// import { render, screen, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import Form from "./Form";

// const pictures = [
//   "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
//   "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
//   "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
// ];

// describe("<SliderGallery />", () => {
//   it("should render SliderGallery", () => {
//     render(<Form />);
//     const currentSlidePicture = screen.getByTestId("currentSlidePicture");

//     expect(currentSlidePicture).toHaveAttribute(
//       "src",
//       "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
//     );
//   });

//   it("should render next Slide", () => {
//     render(<SliderGallery logementPictures={pictures} />);
//     const nextSlideArrow = screen.getByTestId("nextSlideArrow");

//     fireEvent.click(nextSlideArrow);

//     const currentSlidePicture = screen.getByTestId("currentSlidePicture");
//     expect(currentSlidePicture).toHaveAttribute(
//       "src",
//       "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg"
//     );
//   });

// });
