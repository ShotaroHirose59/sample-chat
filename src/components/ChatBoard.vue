<template>
  <v-list three-line>
    <template v-for="(comment, index) in comments">
      <v-list-item :key="index">
        <v-avatar color="indigo" size="48">
          <v-icon dark>
            mdi-account
          </v-icon>
        </v-avatar>
        <v-list-item-content class="ml-4">
          <v-list-item-subtitle class="text--primary subheading">
            {{ comment.content }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            {{ comment.createdAt.toDate().toLocaleString() }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider :key="comment.id"></v-divider>
    </template>
  </v-list>
</template>

<script>
import { db } from '../plugins/firebase'

export default {
  name: "ChatBoard",
  data () {
    return {
      comments: [],
    }
  },
  firestore() {
    return {
      // firestoreのcommentsコレクションを参照
      comments: db.collection('comments').orderBy('createdAt')
    }
  },
}
</script>
