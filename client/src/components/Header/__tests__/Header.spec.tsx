import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '..'

jest.mock('../assets/logo.png')

describe('Header Component', () => {
  it('must to be able render Input', () => {
    render(<Header onChangeInput={jest.fn()} />)
    const { getByTestId } = screen
    expect(getByTestId('input')).toBeTruthy()
  })
  it('must to be able change input', async () => {
    let value = ''
    render(
      <Header
        onChangeInput={event => {
          value = event.target.value
        }}
      />,
    )
    const { getByTestId } = screen
    const input = getByTestId('input')
    fireEvent.change(input, {
      target: {
        value: '123',
      },
    })
    await waitFor(() => {
      expect(value).toEqual('123')
    })
    expect(getByTestId('input')).toBeTruthy()
  })
  it('should be able to render Button and click', () => {
    const mockedOnClick = jest.fn()

    render(<Header onChangeInput={jest.fn()} onClickButton={mockedOnClick} />)

    userEvent.click(screen.getByTestId(/button/i))

    expect(mockedOnClick).toHaveBeenCalledTimes(1)
  })
})
