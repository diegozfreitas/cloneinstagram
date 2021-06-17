import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import ImageLikeada from '../../assets/img/likeada.png'
import ImageLike from '../../assets/img/like.png'
import ImageComments from '../../assets/img/comment.png'
import ImageSend from '../../assets/img/send_outline.png'
import ImageSeila from '../../assets/img/seila.png'

const ItemFeed = ({ data }) => {
  const dataImage = data.likeada ? ImageLikeada : ImageLike;

  const mostraLikes = (data) => {
    console.log('eee', 'data', data)

    if (data === 0) {
      return <Text>Seja o primeiro a curtir.</Text>
    }

    if (data === 1) {
      return <Text>1 pessoa curtiu este post.</Text>
    }

    if (data > 1) {
      return <Text>{data} pessoas curtiram este post.</Text>
    }

    return;
  }

  return (
    <View style={st.container}>
      <View style={st.header}>
        <View style={st.profile}>
          <Image source={{ uri: data.imgperfil }} style={st.headerFoto} />

          <Text style={st.headerName}>{data.nome}</Text>
        </View>
        <View style={st.headerOptions}>
        </View>
      </View>

      <Image
        resizeMode="cover"
        source={{ uri: data.imgperfil }}
        style={st.foto}
      />

      <View style={st.interactions}>
        <View style={st.interactionsGroupIcons}>
          <TouchableOpacity>
            <Image
              source={dataImage}
              style={st.interactionsButtonAction}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={ImageComments}
              style={st.interactionsButtonAction}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={ImageSend}
              style={st.interactionsButtonAction}
            />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <Image
              source={ImageSeila}
              style={st.interactionsButtonAction}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={st.resumeLikes}>
        {mostraLikes(data.likers)}
      </View>

      <View style={st.resumeBio}>
        <Text style={st.resumeBioName}>{data.nome}</Text>
        <Text style={st.resumeBioDescription}>{data.descricao}</Text>
      </View>
    </View>
  )
}

const st = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerFoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerOptions: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  headerName: {
    paddingLeft: 8,
    fontSize: 22,
    color: '#333',
  },

  foto: {
    height: 400,
    alignItems: 'center',
  },

  interactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  interactionsGroupIcons: {
    flexDirection: 'row',
  },
  interactionsButtonAction: {
    width: 24,
    height: 24,
    marginLeft: 4,
    marginRight: 4,
  },

  resumeLikes: {
    paddingLeft: 8,
    paddingRight: 8,
  },

  resumeBio: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  resumeBioName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  resumeBioDescription: {
    fontSize: 18,
  }
})

export default ItemFeed;