from django.contrib.auth.forms import UserCreationForm
from .models import User
from django import forms

class CreationForm(forms.Form):
    class Meta:
        model = User

    username = forms.CharField(label='Username', max_length=20)
    password = forms.CharField(widget=forms.PasswordInput, label='Password', max_length=20)
    def clean(self):
        super(CreationForm, self).clean()
        
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')

        if len(password) < 6:
            self._errors['password'] = self.error_class(['Password must be at least 6 characters long!'])

            return self.cleaned_data
        if not password.isalnum():
            self._errors['password'] = self.error_class(['Password must be alphanumeric! (A-Z, 0-9)'])

