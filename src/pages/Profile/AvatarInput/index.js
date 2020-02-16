import React, { useState, useRef, useEffect } from 'react'
import { useField } from '@rocketseat/unform'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

import api from '~/services/api'
import { removeAvatarRequest } from '~/store/modules/user/actions'

import { Container, RemoveAvatarButton } from './styles'

export default function AvatarInput({ name }) {
  const ref = useRef(null)

  const dispatch = useDispatch()

  const { defaultValue: avatar } = useField('avatar')
  const { defaultValue: avatar_id, registerField } = useField(name)

  const [file, setFile] = useState(avatar_id || null)
  const [preview, setPreview] = useState(avatar && avatar.url)

  useEffect(() => {
    registerField({
      name,
      ref: ref.current,
      path: 'dataset.file'
    })
  }, [ref.current]) //eslint-disable-line

  async function handleChange(e) {
    try {
      const data = new FormData()

      data.append('file', e.target.files[0])

      const response = await api.post('/files', data)

      const { id, url } = response.data

      setFile(id)
      setPreview(url)
    } catch (err) {
      toast.error('Erro ao carregar imagem')
    }
  }

  function removeAvatar() {
    dispatch(removeAvatarRequest())
    setPreview(null)
  }

  return (
    <Container>
      <label htmlFor='avatar'>
        <img
          src={
            preview || 'https://api.adorable.io/avatars/120/abott@adorable.png'
          }
          alt='profile'
        />
        <input
          name={name}
          type='file'
          id='avatar'
          accept='image/*'
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>

      {avatar && (
        <RemoveAvatarButton type='button' onClick={removeAvatar}>
          Remover avatar
        </RemoveAvatarButton>
      )}
    </Container>
  )
}
