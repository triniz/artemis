class ContactsController < ApplicationController
    def new
      @contact = Contact.new
    end

    def create
      @contact = Contact.new(params[:contact])
      @contact.request = request
      if @contact.deliver
        @contact = Contact.new
        flash.now[:success] = "Message envoyé!"
      else
        flash.now[:error] = "On n'a pas pu envoyer votre message !"
        render :new
      end
    end
end
