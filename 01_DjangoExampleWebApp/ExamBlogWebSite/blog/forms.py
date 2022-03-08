#-*- coding: utf-8 -*-

from django import forms


#--- User Defined Form (검색폼)
class PostSearchForm(forms.Form):
    search_word = forms.CharField(label='검색 ')    # html : <label for="id_search_word">검색 :</label><input type="text" name="search_word" id="id_search_word">
