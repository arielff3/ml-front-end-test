import React from 'react'
import { FiSearch } from 'react-icons/fi'
import logo from './assets/logo.png'
import { Container } from './styles'

const Header: React.FC<{
  onChangeInput?(event: React.ChangeEvent<HTMLInputElement>): void
  onClickButton?(): void
  defaultValuesInput?: string
}> = ({ onChangeInput, onClickButton, defaultValuesInput }) => {
  return (
    <>
      <Container>
        <img src={logo} alt="logo" />

        {onChangeInput && (
          <div className="inputContainer">
            <input
              data-testid="input"
              type="text"
              name="searchInput"
              placeholder="Buscar produtos..."
              onChange={onChangeInput}
              defaultValue={defaultValuesInput}
            />
            {onClickButton ? (
              <button
                data-testid="button"
                type="button"
                onClick={onClickButton}
              >
                <FiSearch size={20} color="#272727" />
              </button>
            ) : (
              <span>
                <FiSearch size={20} color="#272727" />
              </span>
            )}
          </div>
        )}
      </Container>
    </>
  )
}

export default Header
