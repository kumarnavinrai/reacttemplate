          
  <View style={styles.container}>
          
          <View style={styles.info}>
            <Icon.Button name="calendar" backgroundColor="transparent" color={config.PRIMARY_BG_COLOR}>
              <Text>{this.props.conference.date}</Text>
            </Icon.Button>
            <Icon.Button name="map-pin" backgroundColor="transparent" color={config.PRIMARY_BG_COLOR}>
              <Text>{(this.props.conference.location||{}).city}</Text>
            </Icon.Button>
          </View>
          <Text style={styles.description}>{this.props.conference.description}</Text>
          <Button onPress = { this.FunctionToOpenSecondActivity } title = 'Click Here'/>
          <View style={styles.author}>
            <Image
              source={{uri: 'https://avatars3.githubusercontent.com/u/17863319?s=460&v=4'}}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.name}>App Developer Info:</Text>
              <Text>Lex Martinez</Text>
              <Text style={styles.link}>me@lexmartinez.com</Text>
            </View>
          </View>
        </View>


         <ScrollView>
        <Image
          source={{uri: this.props.conference.banner}}
          style={styles.banner}
        />
        <View style={styles.container}>
          <Text style={styles.title}>Login-{this.props.conference.name}</Text>
          <View style={styles.info}>
            <Icon.Button name="calendar" backgroundColor="transparent" color={config.PRIMARY_BG_COLOR}>
              <Text>{this.props.conference.date}</Text>
            </Icon.Button>
            <Icon.Button name="map-pin" backgroundColor="transparent" color={config.PRIMARY_BG_COLOR}>
              <Text>{(this.props.conference.location||{}).city}</Text>
            </Icon.Button>
          </View>
          <Text style={styles.description}>{this.props.conference.description}</Text>
          <Button onPress = { this.FunctionToOpenSecondActivity } title = 'Click Here'/>
          <View style={styles.author}>
            <Image
              source={{uri: 'https://avatars3.githubusercontent.com/u/17863319?s=460&v=4'}}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.name}>App Developer Info:</Text>
              <Text>Lex Martinez</Text>
              <Text style={styles.link}>me@lexmartinez.com</Text>
            </View>
          </View>
        </View>
      </ScrollView>