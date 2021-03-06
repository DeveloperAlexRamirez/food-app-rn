import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FadeInImage from './FadeInImage';
import {globalStyles} from '../constants/theme';
import {Hamburguesa} from '../interfaces/CategoryResp';
import {RootStackParams} from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import {scale} from 'react-native-size-matters';

interface Props {
  hamburgers: Hamburguesa;
}

const CardHamburger = ({hamburgers}: Props) => {
  const {
    calorias,
    hamburguesa_img,
    hamburguesa_tiempo,
    hamburguesa_nom,
    hamburguesa_calificacion,
    hamburguesa_precio,
    categorias,
    hamburguesa_desc,
    _id,
  } = hamburgers;

  const uri = hamburguesa_img[0].url;

  const navigation = useNavigation<RootStackParams>();

  return (
    <View>
      <TouchableOpacity
        style={{marginTop: 10}}
        activeOpacity={0.9}
        onPress={() =>
          navigation.navigate('DetailScreen', {
            hamburguesa_precio,
            hamburguesa_tiempo,
            hamburguesa_nom,
            hamburguesa_desc,
            calorias,
            uri,
            _id,
          })
        }>
        {/* Card img */}
        <View>
          <FadeInImage
            uri={uri}
            style={{
              width: '100%',
              height: 200,
              borderRadius: 30,
            }}
          />
        </View>

        {/* Etiqueta tiempo */}
        <View>
          <View
            style={{
              ...globalStyles.shadow,
              position: 'absolute',
              bottom: 0,
              width: '40%',
              height: 40,
              backgroundColor: 'white',
              borderTopRightRadius: 30,
              borderBottomLeftRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: scale(14)}}>
              {hamburguesa_tiempo}
            </Text>
          </View>
        </View>

        {/* Contenedor */}
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}>
          <View style={{marginBottom: 5}}>
            <Text style={{fontSize: scale(18), fontWeight: 'bold'}}>
              {hamburguesa_nom}
            </Text>
          </View>

          {/* icon / categorias / precio */}
          <View
            style={{flexDirection: 'row', marginBottom: 5, flexWrap: 'wrap'}}>
            <Icon
              name="star"
              size={scale(14)}
              color="#ffb143"
              style={{marginRight: 5}}
            />
            <Text style={{marginRight: 5, fontSize: scale(12)}}>
              {hamburguesa_calificacion}
            </Text>

            <Text style={{fontSize: scale(13)}}>
              {categorias.map(c => c.categoria_nom).join(' - ')}
            </Text>

            <Text
              style={{
                marginLeft: 5,
                fontWeight: 'bold',
                fontSize: scale(12),
              }}>
              ${hamburguesa_precio}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardHamburger;
