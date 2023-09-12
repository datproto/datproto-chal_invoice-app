import {render, screen} from '@testing-library/react'

import Input from '@/components/atoms/Input'

describe('Input', () => {
  test('Should render correct passed placeholder', () => {
    render(<Input inputName="test-input" inputPlaceholder="Test input"/>)

    expect(screen.getByPlaceholderText('Test input')).toBeInTheDocument()
  })
})